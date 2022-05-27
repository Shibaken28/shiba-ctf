from Crypto.Util.number import bytes_to_long,getPrime
import random

flag = "the_dovecote_principle_seems_simple_but_it_is_actually_very_deep"
allowed = "abcdefghijklmnopqrstuvwxyz_"
ct = []

r = random.randint(0,1<<128)
for c in flag:
    assert c in allowed
    x = ord(c)
    p = getPrime(128)
    ct.append(p*x+r)

print(ct)

