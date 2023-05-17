from Crypto.Util.number import getPrime,inverse

e = getPrime(128)

p = getPrime(512)
q = getPrime(512)
n = p * q

phi = (p - 1) * (q - 1)
d = inverse(e, phi)

flag = "?"
cs = []

for m in flag:
    x = ord(m)
    c = pow(x,e,n) + pow(inverse(x,n),e,n)
    cs.append(c%n)

print(f"n = {n}")
print(f"d = {d}")
print(f"cs = {cs}")