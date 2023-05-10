from Crypto.Util.Padding import pad
from Crypto.Util.number import long_to_bytes, bytes_to_long
from random import getrandbits, sample

flag = bytes_to_long(b"?")
len = flag.bit_length() // 8 + 1

enc = []
for i in range(0, len):
    m = long_to_bytes(flag)[:i+1]
    enc.append(bytes_to_long(pad(m, 16)))
    flag ^= getrandbits(8) << ((len - i - 1) * 8)

# encを並べ替える
enc = sample(enc, len)
print(f"enc = {enc}")
