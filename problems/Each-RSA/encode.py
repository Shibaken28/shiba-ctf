from Crypto.Util.number import bytes_to_long,getPrime

flag = "?"
p = getPrime(512)
q = getPrime(512)
n = p*q
e = 0x10001

cs = []

for m in flag:
    cs.append(pow(ord(m),e,n))

print(f"n = {n}")
print(f"e = {e}")
print(f"cs = {cs}")

