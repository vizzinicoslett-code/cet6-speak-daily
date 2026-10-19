"""Generate local, dependency-free PWA waveform icons (no remote assets)."""
import math
import struct
import zlib
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent / 'public'
ROOT.mkdir(exist_ok=True)

def icon(size, name):
    rows = []
    heights = [.18, .32, .47, .29, .39]
    for y in range(size):
        row = bytearray([0])
        for x in range(size):
            nx, ny = (x + .5) / size, (y + .5) / size
            rounded = abs(nx - .5) < .33 or abs(ny - .5) < .33 or math.hypot(abs(nx - .5) - .33, abs(ny - .5) - .33) < .17
            color = (50, 122, 96, 255) if rounded else (246, 247, 249, 255)
            for i, height in enumerate(heights):
                cx, cy, radius = .31 + i * .095, .5, .022
                if abs(nx - cx) < radius and abs(ny - cy) < height / 2 - radius or math.hypot(nx - cx, abs(ny - cy) - (height / 2 - radius)) < radius:
                    color = (255, 255, 255, 255)
            row.extend(color)
        rows.append(bytes(row))
    def chunk(kind, data):
        return struct.pack('!I', len(data)) + kind + data + struct.pack('!I', zlib.crc32(kind + data) & 0xffffffff)
    png = b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('!2I5B', size, size, 8, 6, 0, 0, 0)) + chunk(b'IDAT', zlib.compress(b''.join(rows))) + chunk(b'IEND', b'')
    (ROOT / name).write_bytes(png)

icon(192, 'icon-192.png')
icon(512, 'icon-512.png')
icon(512, 'icon-maskable.png')
print('Generated three PWA icons.')
