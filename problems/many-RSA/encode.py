from gmpy2 import iroot
from Crypto.Util.number import long_to_bytes, bytes_to_long, getPrime
from random import sample

m = bytes_to_long(b"?")

p = []
for i in range(9):
    p.append(getPrime(512))

c = []
n = []
e = 0x10001
for i in range(5):
    # pからランダムに2つ選んで掛け算する
    a,b = sample(p, 2)
    n.append(a*b)
    c.append(pow(m, e, n[i]))

print("e = ", e)
print("n = ", n)
print("c = ", c)
