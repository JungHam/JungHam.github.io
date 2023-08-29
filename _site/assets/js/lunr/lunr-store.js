var store = [{
        "title": "[AIFFEL] DAY 10",
        "excerpt":"20210111 오전 : 머신러닝이란? 딥러닝이란? 에서 출발하는 질문들을 점차 심층적으로 내려가는 질문들의 사례를 보았다. CS231n-03-02 Optimization 계곡에 있다고 생각하고, 우리는 계곡의 가장 낮은 밑바닥을 찾아내는 것이 목적이다. 지금 우리가 있는 곳의 높이가 loss, 그리고 밑바닥을 찾아가는 여정이 optimization과정이 된다. 풍경은 파라미터 W를 의미한다. W는 loss에 따라서 달라지니까. loss를 줄이는 방법은...","categories": ["blog"],
        "tags": ["AI","AIFFEL","MODULAB"],
        "url": "/blog/AIFFEL-DAY-10/",
        "teaser": null
      },{
        "title": "[aiffel] Day 11",
        "excerpt":"20210112 부제 : 스티커 사진 프로그램 만들기 오늘 노드에서는 얼굴 인식의 방법과 얼굴 인식 결과를 간단하게 응용해서 얼굴에 스티커를 붙이는 프로그램을 작성했다. OpenCV의 기능들을 사용하는 게 중요했는데, OpenCV가 처리하는 이미지 데이터의 원하는 부분에 제대로 접근하려면 좌표 개념이 매우 중요하다. OpenCV는 행렬의 방식으로 데이터를 표현하고 있기 때문에, y축을 먼저 기술하고 x축을...","categories": [],
        "tags": [],
        "url": "/AIFFEL-DAY-11/",
        "teaser": null
      },{
        "title": "[aiffel] Day 20",
        "excerpt":"CS231n-05 포스팅이 매우 격조했습니다. 한동안 컨디션이 매우 안좋았기 때문이죠. 주말동안 푹 쉰 건 아니지만 잘 먹어서 좀 나아진 듯 합니다. 매일 매일 기록하자! 가 모토인데 이제는 매일 매일 잠 잘 자고, 잘 따라가고, 적극적인 자세로 임하는 것이 목표가 되었습니다. 여러분, 건강하세요. 오늘의 그림 출처는 여기 : https://cding.tistory.com/5 ConvNets의 원리 4강을...","categories": [],
        "tags": [],
        "url": "/AIFFEL-DAY-20/",
        "teaser": null
      },{
        "title": "[aiffel] Day 22",
        "excerpt":"파이썬을 해봅시다 오전 기초 과정에서는 파이썬 문법 심화, 오후 풀잎 시간에는 파이썬 공부 및 코테 풀어보기(프로그래머스)를 진행했다. 오늘 주목한 것 : immutable vs mutable 그래서 코드를 직접 짜봐서 테스트를 해봤다. print(\"make 2 tuple variable\") a = tuple([1,2,3]) b = a print(id(a), id(b)) print(\"assign new tuple at the other tuple\") b...","categories": [],
        "tags": [],
        "url": "/AIFFEL-DAY-22/",
        "teaser": null
      },{
        "title": "[aiffel] Day 29",
        "excerpt":"항상 gem과 jekyll이 문제다. 분명 그전날 세팅 다 했는데 다음날 충돌하는 모양을 보고 있노라면, 매우 허무해진다. 그래서 ruby부터 다시 깔았으므로, 다음에 충돌이 날 때는 어쩔 수 없다. PATH 확인하고, bundle이 의존하는 ruby를 에러메세지에서 주의깊게 살펴본 후 도저히 안되면 날려버리고 새로 세팅하라. CS231n-06 Batch normalization 배치로 얻은 데이터가 나왔을 때, 각...","categories": [],
        "tags": [],
        "url": "/AIFFEL-DAY-29/",
        "teaser": null
      },{
        "title": "[aiffel] Day 32",
        "excerpt":"CS231n 7강 저번시간 복습 internal covariant : 데이터 간의 분포가 달라지면 학습 결과가 달라질 수 있다. Batch Normalization의 위치 : non-linearble 연산이 필요한 경우 그래서 normalization하는 단계는 2단계(normalization -&gt; network 학습 변수 적용) 모멘텀 기법 + gradient squared term vx = 0 while True : dx = compute_gradient(x) vx =...","categories": [],
        "tags": [],
        "url": "/AIFFEL-DAY-32/",
        "teaser": null
      },{
        "title": "[aiffel] Day 34",
        "excerpt":"코딩마스터 프로그래머스 12930 와..! 아니 이거 조심하자 str = \"Line1-abcdef \\nLine2-abc \\nLine4-abcd\"; print str.split( ) print str.split(' ', 1 ) 이거 돌리면 어떻게 되게? ['Line1-abcdef', 'Line2-abc', 'Line4-abcd'] ['Line1-abcdef', '\\nLine2-abc \\nLine4-abcd'] 딜리미터가…사라집니다…코드는 ‘명확히’ 짤 것. 42577 이거는 풀이가 여러 방면으로 나눌 것 같은데, 일단 문제조건을 보면 ‘어떤 번호가 다른 번호의 접두사가...","categories": [],
        "tags": [],
        "url": "/AIFFEL-DAY-34/",
        "teaser": null
      },{
        "title": "[aiffel] Day 36",
        "excerpt":"지시딥 준비 부제 : 밑바닥부터 시작하는 딥러닝 1권 5장 사전학습 일단 앞 부분을 다시 듣고 수식 전개를 해야할 것 같다. 이 부분이 어렵게 느껴지는건 당연하다고 하니 다행이다. 그리고 효율적인 전파와 역전파 계산을 위해 중간 결과값들을 캐시하는게 맞았다. 코드로 어떻게 구현하는 지가 궁금했는데 이렇게 하는거구나… 역전파 역전파가 하는 일은 연쇄 법칙의...","categories": [],
        "tags": [],
        "url": "/AIFFEL-DAY-36/",
        "teaser": null
      },{
        "title": "[aiffel] Day 37",
        "excerpt":"Fundamental 딥러닝 레이어의 이해(1) : linear, convolution 레이어의 정의 : 하나의 물체가 여러 개의 논리적인 객체들로 구성되어 있는 경우, 각 개체를 하나의 레이어라 정의함 Linear layer 별칭 : Fully Connected Layer, Feedforward Neural Network, Multilayer perceptrons, Dense Layer… Weight의 모든 요소를 Parameter라고 부른다. 텐서플로우의 주요 코드 설명 import tensorflow as...","categories": [],
        "tags": [],
        "url": "/AIFFEL-DAY-37/",
        "teaser": null
      }]
