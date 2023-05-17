from Crypto.Util.number import bytes_to_long,getPrime

flag = b"?"
m = bytes_to_long(flag)
p = getPrime(512)
E = []

for i in range(100):
    e = getPrime(64)
    m = pow(m,e,p)
    E.append(e)

print(f"p = {p}")
print(f"E = {E}")
print(f"c = {m}")