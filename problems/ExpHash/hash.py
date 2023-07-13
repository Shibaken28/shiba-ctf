# 結合法則の成り立つハッシュ関数
# 1. 乗法ハッシュ
import random
import string
from Crypto.Util.number import getPrime

def randomStringGenerator():
    return ''.join(random.choices(string.ascii_letters + string.digits, k=5))

def expHash(s, base, mod):
    ret = 0
    for i, c in enumerate(s):
        ret = (ret + ord(c) * pow(base, i, mod)) % mod
    return ret

list1 = []
list2 = []
list3 = []
list4 = []

for i in range(1000):
    list1.append(randomStringGenerator())
    list2.append(randomStringGenerator())
    list3.append(randomStringGenerator())
    list4.append(randomStringGenerator())

s1 = random.choice(list1)
s2 = random.choice(list2)
s3 = random.choice(list3)
s4 = random.choice(list4)

password = s1 + s2 + s3 + s4

base = getPrime(16)
mod = getPrime(64)
print(f'base = {base}')
print(f'mod = {mod}')
print(f'list1 = {list1}')
print(f'list2 = {list2}')
print(f'list3 = {list3}')
print(f'list4 = {list4}')
print(f'hash(password) = {expHash(password, base, mod)}')
