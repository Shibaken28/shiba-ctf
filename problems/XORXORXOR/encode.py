from gmpy2 import iroot
from Crypto.Util.number import long_to_bytes, bytes_to_long, getStrongPrime
from random import sample

m = bytes_to_long(b"?")

for i in range(0, 1<<32):
    m = m ^ i

print(m)
