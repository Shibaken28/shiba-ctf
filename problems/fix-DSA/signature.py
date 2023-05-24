# DSA
from Crypto.Util.number import getPrime, inverse, bytes_to_long, long_to_bytes, GCD
from Crypto.PublicKey import DSA
from Crypto.Random.random import randint
from hashlib import sha256
from random import shuffle

def gen_key():
    key = DSA.generate(1024)
    p = key.p
    q = key.q
    g = pow(2, (p-1)//q, p)
    x = randint(1, q-1)
    y = pow(g, x, p)
    assert g != 1
    return (p, q, g, y), x

def sign(msg, key, x, k):
    p, q, g, y = key
    r = pow(g, k, p) % q
    s = inverse(k, q) * (bytes_to_long(sha256(msg).digest()) + x*r) % q
    assert r != 0
    assert s != 0
    return r, s

k = bytes_to_long(b'sctf{}')
key, x = gen_key()
msg = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry." , "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."]
signature = []

for m in msg:
    r, s = sign(m.encode(), key, x, k)
    signature.append((r, s))
 
p,q,g,y = key
w = []
for r,s in signature:
    w.append(inverse(s, q))

print(w)
z1 = w[1] - w[0]
z2 = w[2] - w[0]
print(z1)
print(z2)

print(GCD(z1,z2))

