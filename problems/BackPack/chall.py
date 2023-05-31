# ナップザック暗号
from Crypto.Util.number import *
from random import getrandbits

m = bytes_to_long(b'sctf{?????????????????????}')
n = m.bit_length()

w = []
sum = 0
for i in range(n):
    w.append(sum + getrandbits(128) + 1)
    sum += w[-1]

q = getPrime(sum.bit_length() + 1)
r = getPrime(sum.bit_length() + 1)
assert GCD(q, r) == 1

b = []
for i in range(n):
    b.append((w[i] * r) % q)

c = 0
for i in range(n):
    if m & (1 << i):
        c += b[i]

print(f'q = {q}')
print(f'r = {r}')
print(f'c = {c}')
print(f'w = {w}')
