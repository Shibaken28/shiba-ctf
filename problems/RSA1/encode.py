from Crypto.Util.number import bytes_to_long,getStrongPrime

flag = b"sctf{A_good_start}"
m = bytes_to_long(flag)
p = getStrongPrime(1024)
q = getStrongPrime(1024)
n = p*q
e = 0x10001

c = pow(m,e,n)

print(f"p = {p}")
print(f"q = {q}")
print(f"n = {n}")
print(f"e = {e}")
print(f"c = {c}")


