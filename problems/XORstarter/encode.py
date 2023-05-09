flag = "sctf{XOR_has_int3r3sting_pr0perties}"

key = 49
assert 0 <= key < 256

encoded = []
for c in flag:
    encoded.append(ord(c) ^ key)

print(encoded)

