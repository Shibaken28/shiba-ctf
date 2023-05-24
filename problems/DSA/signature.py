# DSA
from Crypto.Util.number import getPrime, inverse, bytes_to_long, long_to_bytes
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

def sign(msg, key, x):
    p, q, g, y = key
    k = randint(1, q-1)
    r = pow(g, k, p) % q
    s = inverse(k, q) * (bytes_to_long(sha256(msg).digest()) + x*r) % q
    assert r != 0
    assert s != 0
    return r, s

candidates = []
dummy = "0123456789"

# フラグ
msg = b"sctf{this_is_passcode_?????????????????????????????????????????????}"

key, x = gen_key()
r, s = sign(msg, key, x)
print(f"p, q, g, y = {key}")
# 正しいフラグの署名
print(f"r = {r}")
print(f"s = {s}")

candidates.append(msg)


for i in range(500):
    m = msg.decode()
    # ランダムな文字番目を変更する(改竄)
    for j in range(100):
        idx = randint(22, len(m)-2)
        m = m[:idx] + dummy[randint(0, len(dummy)-1)] + m[idx+1:]
    fake = m.encode()
    candidates.append(fake)

# ランダムに入れ替える
shuffle(candidates)

print(f"candidates = {candidates}")
