flag = "?"

key = 49
assert 0 <= key < 256

encoded = []
for c in flag:
    encoded.append(ord(c) ^ key)

print(encoded)

