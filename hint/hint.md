# ヒント集
## このページについて
ヒント集です．ヒントの程度を表すために，以下のような記号を用いています．
- ★☆☆：必要な知識や使う性質をほのめかす，方向性を示す程度．
    - 例：「 $a$ の値に注目しましょう」
- ★★☆：具体的な知識や性質を提示する程度，あるいはより具体的なヒント．
    - 例：「 $a$ の取りうる範囲は $1$ から $100$ です」
- ★★★：解法をほぼ完全に示す程度
    - 例：「 $a$ を $1$ から $100$ まで全探索しましょう」

## No meaning

<details>
<summary>ヒント ★★☆</summary>
これは換え字暗号(substitution cipher)です．
</details>

## Numbers 3

<details>
<summary>ヒント1 ★☆☆</summary>
一見すると16進数ですが，違います．
</details>

<details>
<summary>ヒント2 ★★☆</summary>
この数字を眺めていると，16進数ではないと予想できる決定的な特徴があります．その特徴がわかればこの数が何を表しているかがわかるでしょう．
</details>


## Math Class 3

<details>
<summary>ヒント1 ★☆☆</summary>
下10桁は，ある数を$10^{10}$ で割った余りと等しいです．
</details>

<details>
<summary>ヒント2 ★★☆</summary>
累乗を高速に計算するアルゴリズムが存在します．
</details>

## XOR Maze
<details>
<summary>ヒント ★★☆</summary>
XORの性質を以下に示します．

$$
\begin{align*}
A \oplus A &= 0 \\
A \oplus 0 &= A \\
A \oplus B &= B \oplus A \\
(A \oplus B) \oplus C &= A \oplus (B \oplus C) \\
\end{align*}
$$
これらの性質から次のようなことも言えます．
$$
\begin{align*}
A \oplus B = C \Leftrightarrow A \oplus C = B \Leftrightarrow B \oplus C = A
\end{align*}
$$

</details>

## Each RSA

<details>
<summary>ヒント ★☆☆</summary>
$m$ が小さい値しか取らないことに注目しましょう．
</details>

## Small RSA

<details>
<summary>ヒント ★☆☆</summary>
$e$ が小さいとどのような不都合が生じるでしょうか．
</details>


## 2D Lagrange

<details>
<summary>ヒント1 ★☆☆</summary>
$a,b,c$ を全探索すると時間がかかります．どうにかして計算量を減らす方法はないでしょうか．
</details>


<details>
<summary>ヒント2 ★★☆</summary>
$a,b,c$ のうち，2つの値が決まれば残りの1つの値も決まります．
</details>

## Many RSA
<details>
<summary>ヒント ★★☆</summary>
$9$ 個の素数が用意されて， $5$ 個分の $N$ ，すなわち $10$ 個の素数が使用されています．つまり，使われる素数でダブりがあります．
</details>


## Unbalance RSA

<details>
<summary>ヒント1 ★☆☆</summary>
小さい素数も使われているので，素因数分解ができますが，完全に素因数分解することは難しそうです．
</details>

<details>
<summary>ヒント2 ★★☆</summary>
$N$ を完全に素因数分解する必要はありません．
</details>
