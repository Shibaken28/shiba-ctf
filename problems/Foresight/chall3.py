from random import randint
from Crypto.Util.number import bytes_to_long, getPrime

# 線形合同法で乱数生成
class RandomGenerator:
    def __init__(self, a, b, m, x0):
        self.a = a
        self.b = b
        self.m = m
        self.x = x0
    
    def next(self):
        self.x = (self.a * self.x + self.b) % self.m
        return self.x

# 乱数を生成する
m = getPrime(32)
a = randint(1, m)
b = randint(1, m)
x0 = randint(1, m)
gen = RandomGenerator(a, b, m, x0)

leaked = []
for i in range(10):
    leaked.append(gen.next())

print(f"m = {m}")
print(f"x = {leaked}")

flag = "?"
cipher = []
# フラグを暗号化する
for c in flag:
    cipher.append(ord(c) ^ gen.next())

print(f"cipher = {cipher}")
