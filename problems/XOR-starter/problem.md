## 問題
次の式が成り立つとき，$x$を文字列に変換したものがフラグである．

$$
\left\{ \,
    \begin{aligned}
    & A \oplus B \oplus C\oplus D \oplus x &=& 5377641754428678066512987230012515224174\\
    & A \oplus B \oplus D &=& 11331496562866094130237248094409599670107 \\
    & B \oplus C \oplus D &=& 29106038454181545728710949998117033276714 \\
    & B \oplus D &=& 2864369635618546361322337675519612189282 \\
    \end{aligned}
\right.
$$



## XORの性質

- $A\oplus B = B\oplus A$
- ($A\oplus B) \oplus C= A\oplus (B\oplus C)$
- $A\oplus A = 0$
- $A\oplus 0 = A$

この性質により，次のような計算ができます
- $A\oplus B\oplus A = A\oplus A \oplus B = 0\oplus B = B$
- $A\oplus A\oplus A\oplus A = 0$

またPythonではXOR演算子として`^`が使えます．
```python
print(12^7) # 12と7のXOR
```
