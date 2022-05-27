S = "Hello"
d = 0

for c in S:
    d = (d<<8)+ord(c)
    # d = d*256+ord(c) と同じ

print(d)
