from gmpy2 import iroot
from Crypto.Util.number import long_to_bytes, bytes_to_long, getPrime

m = bytes_to_long(b"?")
p = getPrime(1024)
q = getPrime(1024)
n = p * q
e = 65537

mask = (1<<512) - 1
s = (p & (mask<<512)) | (q & mask)

c = pow(m, e, n)
print(f"n = {n}")
print(f"c = {c}")
print(f"e = {e}")
print(f"s = {s}")
