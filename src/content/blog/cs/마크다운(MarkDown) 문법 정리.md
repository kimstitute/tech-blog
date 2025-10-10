---
title: "마크다운(MarkDown) 문법 정리"
description: "블로그 작성에 필요한 필수 마크다운(MarkDown) 문법 정리"
pubDate: 2025-10-10
updatedDate: 2025-10-10
heroImage: "https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg"
tags: ["Markdown"]
categories: ["Languages"]
subject: "Markdown for GitHub Blog"
draft: false
featured: true
author: "김민상"
location: "Seoul, Korea"
---

## Intro
마크다운을 github의 .md 형식 문서, Notion, Jupyter Notebook의 .ipynb 파일 등, 여기저기에서 사용해왔음에도 여전히 문법에 익숙치 않네요.

github 블로그 시작을 계기삼아 이참에 마크다운 언어의 기본 문법을 정리해보려고 합니다. 

HTML 태그를 이용해 github 첫 글을 작성해보니 불편함이 이만저만이 아니기도 하고요.

<hr>

## 마크다운(Markdown)이란?
> 문서를 쉽고 빠르게 작성할 수 있도록 설계된 경량 마크업 언어로 HTML 같은 서식이 적용된다.

쉽게 말해 HTML과 호환되면서 문법을 간소화한 대체제라 보면 됩니다.

다만, 표준이 없어서 마크다운마다 미묘하게 문법이 다를 수도 있습니다.

이 글에서는 github에서 사용 가능한 문법만 정리하도록 하겠습니다.

<hr>

## 마크다운 기본 문법
### 1. 헤더(제목)

>
# H1 (헤더1)
## H2 (헤더2)
### H3 (헤더3)
#### H4 (헤더4)

```markdown
# H1 (헤더1)
## H2 (헤더2)
### H3 (헤더3)
#### H4 (헤더4)
```

HTML에서 **<h1\>제목</h1\>**과 같이 태그를 사용하여 헤더를 썼던 것과 같습니다.

<hr>

### 2. 텍스트 강조

> 
일반 글씨
**볼드한 글씨**
__볼드한 글씨__
*기울어진 글씨*
_기울어진 글씨_
~~취소선 그어진 글씨~~

```markdown
일반 글씨
**볼드한 글씨**
__볼드한 글씨__
*기울어진 글씨*
_기울어진 글씨_
~~취소선 그어진 글씨~~
```

HTML에서는 아래와 같습니다. 이유는 알 수 없지만 <b\></b\> 태그는 사용이 안 됩니다.
```html
<strong>볼드한 글씨</strong>
<em>기울어진 글씨</em>
<i>기울어진 글씨</i>
<del>취소선 그어진 글씨</del>
```

<hr>

### 3. 순번 없는 리스트 (Unordered List)
>
- 항목 1
- 항목 2
    - 서브항목 2.1
    - 서브항목 2.2
* 항목 3

```markdown
- 항목 1
- 항목 2
    - 서브항목 2.1
    - 서브항목 2.2
* 항목 3
```

HTML에서는 아래와 같습니다. 마크다운을 쓰면서 가장 편리해진 부분인 것 같습니다.

```html
<ul>
  <li>항목 1</li>
  <li>항목 2
    <ul>
      <li>서브 항목 2.1</li>
      <li>서브 항목 2.2</li>
    </ul>
  </li>
  <li>항목 3</li>
</ul>
```

<hr>

### 4. 순번 있는 리스트 (Ordered List)

>
1. 첫째 항목
2. 둘째 항목
	1. 첫째 하위항목
    2. 둘째 하위항목
3. 셋째 항목

```markdown
1. 첫째 항목
2. 둘째 항목
	1. 첫째 하위항목
    2. 둘째 하위항목
3. 셋째 항목
```

HTML에서는 아래와 같습니다.

```html
<ol>
  <li>첫 번째 항목</li>
  <li>두 번째 항목
    <ol>
      <li>하위 항목 2.1</li>
      <li>하위 항목 2.2</li>
    </ol>
  </li>
  <li>세 번째 항목</li>
</ol>
```

<hr>

### 5. 코드 블록 (Code Block)

>
한 줄 코드는 `print("hello, world!")` 이렇게 사용
<br>
여러줄 코드는 아래와 같이
```python
for i in range(10):
	print(i+1)
```

```makrdown
	한 줄 코드는 `print("hello, world!")` 이렇게 사용
	<br>
    여러줄 코드는 아래와 같이
    ```python
    for i in range(10):
        print(i+1)
    ```
```

좀 생소할 수도 있지만, 백틱(\`)이라는 특수문자를 사용합니다. 보통 키보드 숫자 버튼 1 왼쪽에 물결문자(~)와 같이 사용하는데요.

마크다운에서는 백틱을 이용하여 코드 블록을 표현합니다. 여러줄 코드일 때는 백틱 3개 옆에 소문자로 어떤 언어인지 적어줍니다.

HTML에서는 아래와 같습니다.

```html
한 줄 코드는<code>print("hello, world!")</code>이렇게 사용
<br>
여러줄 코드는 아래와 같이
<pre><code>
for i in range(10):
	print(i+1)
</code></pre>
```

<hr>

### 6. 링크
>
[Google](https://www.google.com)

```markdown
[Google](https://www.google.com)
```

텍스트를 클릭하면 링크가 연결되게 하는 기능입니다. HTML에서는 아래와 같습니다.

```html
<a href="https://www.google.com">Google</a>
```

<hr>

### 7. 인용문 (Blockquotes)
>
인용문
>>
중첩된 인용문
>>> 여러겹 중첩도 가능

```markdown
>
인용문
>>
중첩된 인용문
>>> 여러겹 중첩도 가능
```

인용문을 만들 때는 '>'을 사용합니다. HTML에서는 아래와 같습니다.

```html
<blockquote>
  <p>인용문</p>
  <blockquote>
    <p>중첩된 인용문</p>
    <blockquote>
      <p>여러겹 중첩도 가능</p>
    </blockquote>
  </blockquote>
</blockquote>
```

<hr>

### 8. 구분선 (Horizontal Rule)

>
___
***

```markdown
___
***
```

지금까지 각 문법을 소개하면서 구분을 위해 사용했던 구분선 혹은 수평선입니다.

HTML에서는 아래와 같습니다. 구분선은 여전히 HTML이 더 익숙합니다.

```html
<hr>
```

<hr>

### 9. 테이블 (Tables)

> 
| 이름  | 나이 | 직업  |
|------|-----|------|
| 민상 | 28  | 개발자 |
| 유진 | 25  | 편집자 |

```markdown
| 이름  | 나이 | 직업  |
|------|-----|------|
| 민상 | 28  | 개발자 |
| 유진 | 25  | 편집자 |
```

HTML에서는 아래와 같습니다.

```html
<table>
  <tr>
    <th>이름</th>
    <th>나이</th>
    <th>직업</th>
  </tr>
  <tr>
    <td>민상</td>
    <td>28</td>
    <td>개발자</td>
  </tr>
  <tr>
    <td>유진</td>
    <td>25</td>
    <td>편집자</td>
  </tr>
</table>
```

<hr>

### 10. 이미지

> 
![귀여운 거북이 그림](https://raw.githubusercontent.com/kimstitute/Medical_AI/main/sangsang2.png
)

```markdown
![귀여운 거북이 그림](https://raw.githubusercontent.com/kimstitute/Medical_AI/main/sangsang2.png
)
```

마크다운으로 이미지 넣는 방법입니다. 링크와 매우 유사합니다. HTML에서는 아래와 같습니다.

```html
<img src="https://raw.githubusercontent.com/kimstitute/Medical_AI/main/sangsang2.png" alt="귀여운 거북이 그림">
```












