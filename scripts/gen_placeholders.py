import struct
import zlib
import os

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "images")
os.makedirs(OUT_DIR, exist_ok=True)


def write_png(path, width, height, rgb):
    def chunk(tag, data):
        return (
            struct.pack(">I", len(data))
            + tag
            + data
            + struct.pack(">I", zlib.crc32(tag + data))
        )

    sig = b"\x89PNG\r\n\x1a\n"
    ihdr = struct.pack(">IIBBBBB", width, height, 8, 2, 0, 0, 0)
    row = bytes([0]) + bytes(rgb) * width
    raw = row * height
    idat = zlib.compress(raw, 6)

    with open(path, "wb") as f:
        f.write(sig)
        f.write(chunk(b"IHDR", ihdr))
        f.write(chunk(b"IDAT", idat))
        f.write(chunk(b"IEND", b""))


# barvy z palety projektu (karta / linka), aby placeholdery ladily s webem
IMAGES = [
    ("hero-portret.jpg", 800, 1000, (0xF3, 0xED, 0xE4)),
    ("o-mne.jpg", 800, 800, (0xE3, 0xD9, 0xCB)),
    ("pribeh-priroda.jpg", 1200, 900, (0xE3, 0xD9, 0xCB)),
    ("detail-1.jpg", 900, 900, (0xF3, 0xED, 0xE4)),
    ("detail-2.jpg", 900, 900, (0xE3, 0xD9, 0xCB)),
    ("og-image.jpg", 1200, 630, (0x58, 0x6B, 0x4D)),
]

for name, w, h, color in IMAGES:
    write_png(os.path.join(OUT_DIR, name), w, h, color)
    print(f"created: {name} ({w}x{h})")
