from gmpy2 import iroot
from Crypto.Util.number import long_to_bytes, bytes_to_long, getPrime

m = bytes_to_long(b"?")
b = [25, 25, 25, 25, 25, 25, 25, 256, 256, 512] 
ps = []
e = 65537

for a in b:
    ps.append(getPrime(a))

n = 1
for p in ps:
    n *= p

c = pow(m, e, n)
print(f"n = {n}")
print(f"c = {c}")
print(f"e = {e}")
