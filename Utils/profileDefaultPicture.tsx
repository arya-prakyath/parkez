const profileDefaultPicture = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAMoklEQVR4nO2da2wc1RXH/3dm1vuw1491YsfJJg1O4iUPIuydta2QUkJToaogpFKplJYKSqFSJarSF6CKVlWoWlGqlj74gFoBDSq0TasWKhVQECpEbtbetbEqII+SNUoce+3Ysb129jUzpx+8a+y1vR7vztyZJP5JK+/O3rnn7Pw9d+7ce+ZcBpsTDofrGWMBxti1jLEWAAEAGwBU5l51ub8AMAPgYu7vDIAhAKeI6BQRnSCikx0dHWP8f4V+mNUOFNLd3b1BEISPE9FBxtinAFxjsIkhAMcYY0cZY6+1tbV9aHD9ZWELQaLR6E4i+jKAOwDs4Gz+FBEdYYwdlmX5BGfbi7BMkEgksg7AXUR0N2NMtsqPAroBvADgRVmWL1jhAHdBIpHIFgDfBvBVAB7e9nWSJqLniejx9vb2szwNcxMkHA5fI4riNwE8AMDFy26ZZBljL2ma9uNQKHSSh0HTBenv76/MZrOPYfaskMy2ZxIKgKcVRXmss7NzykxDpgoSjUZvI6KnAfjNtMORISJ6RJblw4wxMsOAKYLkmqffAzhgRv1WQ0RviKJ4nxldZsMF6enpuZ0x9ixmb9iuZCYB3C/L8l+MrNQwQSKRiAPAIQDfM7Jem0MAfu12u7+7e/fujBEVGnLgIpFIExG9bKP7Cd6EFUW5vbOzM15uRWULkrtevAb+d9h2IyaK4i2tra2ny6mkLEEikch1AF4FsLGceq4g4kT06VAo1FdqBSUL0t3d/QlBEF4GUF1qHeUgiiKcTiecTicEQQAAaJqGdDqNdDoNVVWtcAsAphhjtwaDwbdL2bkkQaLR6F4i+jeA2lL2LxWXywWfz4eamhp4PMuPuhARkskkJicnMT4+jlQqxdFLAMAUgAOyLPeudsdVCxKJRLYBOIbZOQkuVFZWoqmpCTU1NSXtPzk5iaGhIczMzBjsWVFGVVXd39HRcWo1O61KkP7+/oZsNnsMnC7goijC7/dj3bp1htQ3OjqKwcFBns3ZGU3Tbmhvbx/Wu4NuQU6fPu2cmJg4xqtr63a7sW3bNjidTkPrTaVSOHPmDJLJpKH1FiHsdrtv1HufIuitdXJy8me8xKiqqkIgEDBcDGD2OhQIBFBZWblyYWPoSCaTP9FbWNcZEo1GbyWil/WWLwe3241AIABRFE21o6oqTp06hUuXLplqJwcB+Kwsy39fqeCKBzg3odQHwGeAY0URRRG7du1CRUWF2aYAAJlMBu+//z4UReFh7qKqqsGOjo5YsUJFmywiYgCeAwcxAGDr1q3cxACAiooKbNmyhZe5OkmSnlmpUFFBent77wKnIfSamhrU1nK9rQEA1NXVobqaz70tER2MRqOfL1ZmWUGOHz9eTURPGO/W0mzcaN3oy6ZNm7jZIqJfRiKRZW+olhVEkqTHwWmMqrq6uuidt9l4PB5uZwmADYyxHy735ZKC9PX17QDwddNcKqC+vp6XqWXx+bhcJgEARPRgbsRjEUsKomnaIwDM7XfmYIyVPCRiJLW1tWCM27yaBODhpb5YJEh3d/dmIvqS6S7lcLvdpt9z6EEURbjdbp4m7+nt7f1Y4cZFgjDGHgbAre/J+SAUhbMvDk3TvlW4cYEgvb296xljX+HnE0wZHikVC3y5PxwOL7iALhBE07QvAOD6b2KH5iqPBb64JUm6c/6GBYIQ0d18/cHcbJ8dsMKXwmM+50E0Gt15FUeNWElHT09PIP9hTpDc8xlrWABj7Iv59/PP0Tss8AVEpoTIloSFvnwu/0YAgHfeeWcTLIqrsjA6ZBEW+rIzp8GsINls9pNWeZLNZq0yvYhMxpBo0JJQVfUmICcIY8yyKHULQnSWxUpfiOgA8NE15GarHJmZmbHFdYSIeE3nLsfNACDkHr7kNm1WiKqqvOOllmR6etrq69k1XV1dPoGIAiuXNZexMeuf5R8fH7faBTidzhYBs5kRLGV8fJxXoMGSKIpiC0GIKCAIgmC5IJqmIR4v+9GKkhkeHoamaZbZn0dAIKIWq70AgHg8jnQ6zd1uKpXCyMgId7tLQUQBARyDpotBRIjFYlx7XESEgYEBW/TyAIAx1igAqLLakTwzMzM4e5Zf4oSzZ8/aooc3D68AwGu1F/MZHR3F+fPnTbdz/vx5jI6Omm5nlXgl2EwQABgaGoKqqvD7/YYHHhARzp07Z5vrRgFeCTZqsuYzMjKCZDJpaHhpJpNBLBbD9PS0IfWZgNfWuUcSiQTeffddNDU1oaGhoeQZPU3TMDIygqGhIbt0b5dFAjANTsHUpaBpGgYHBxGPx7Fu3TrU19fD5dKXTCiVSmFsbAwXLlyw9MZzFSQkAAnYWJA8iqJgeHgYw8PDcDqdqKqqgsvlQkVFxVxwgqqqyGQySKVSSCQSlg6nl8icIJcV+Uefr0ASAmabrDXsQUIAoPsJ0TXMhYjiAgAuqevW0MUJgTG2Joh9OCmoqromiE1gjJ0UFEWxPHnwGrNkMpnTDAAikcgAgEXPKqzBlZgsy835oZM3AdxjpTd6EQQBTqcTkiRBFMW5FzB7Y5h/KYqCVCplm7kOHbwB5PLoEtGbjDHbCSKKIrxeLzweD9xuN9xuNyoqKnSPABMR0uk0kskkUqkULl26hEQiYXV0yXK8CeQEEUXxqB0G3Rhj8Hq9cy+Px1PW8DtjDC6Xa8HYVz7+KpFIYGpqCtPT03Y4iwg5QeZ+bSQSOQGLIlCqqqpQV1cHn88HSeI7AK2qKiYmJjA+Po6pKVOTVhfjPVmWdwMLU3//DcCjvDxwOBxoaGiAz+fjmk6jEFEUUV9fj/r6emQyGYyNjWF0dJR3zPGR/Js5QVRVfU4URdMF8Xg8WL9+PXw+n62engJmc580NTVhw4YNmJiYQDwe5zLnTkR/zL9f0EBHo9FuIgqZYdTj8cDv98Prtd2McVGmpqYwODhoWtwvEf0nFArty3+WCr48DMBQQRwOBzZu3GhYmj7eVFdXo7q6GhcvXsS5c+cMn2NhjB2e/7mwzXgRgGG57xobG7Fnz57LVoz51NXVYffu3WhsbDSy2kuqqv55/oYFguSW+flduVYcDge2b98Ov99vu+tEOQiCAL/fj5aWFjgcjrLrI6JnCleNW3S0FEV5AkDJ56XX68WuXbtskb/ELPK/saqqrICdtMPheLJw4yJBOjs7zwH4QykWampqsH37du73ElYgSRJ27NhRTlqnZ6+//vrBwo3LtSc/xewyP7pxuVxobm6+opqolRAEAc3NzbqjYOaRVVV1yeRwSx49WZY/IKLfrMbC5s2bryox8uSTPa+Sp5ZLhrnsEUyn0z8AsOiUWgpJknhmZLMdNTU1q2mmhxRFObTcl8sKsn///gQRfUePhRJO2SsOvZmEiOgbxVZ6K9rGhEKhl4jojZWM2HQ4mys6j8HroVDoSLECKzb6RHQvgKJPZSaTSVslAOBNPlpyBS6Kovi1lQqtKEh7e/vZ3ORV0UmD4eGrN7xLx28nIrq3tbV1YKWCurpFwWDwn0T0VLEyIyMjtni8mTcXLlxY8cEfInoyFAr9Q099uvupHo/nYQDhYmUGBgYQi8Vsk53BLIgIMzMziMVi+PDD4mtLMsa6GGPf11v3quZHe3t712ua9jZ0zizaKX2fkayiE/OBoig3rGY5vVVPWPf09DQzxo4BaFrtvlcZQ6qq3rDSagiFlBRBkFsu7y1wXhTsMmKKiG4qZfm8ksY6ZFn+ryAIt2N2Pdg1FjIJ4DOlrmVY8uBTW1vbW0S0HzqHV64ShjVNu0mW5WOlVmDU0quvArBFig4LOcMYuyUYDP6vnErKHp7t6OiIKYpyI1boEl/JMMa6BEHoLFcMwABBAKCzszOeSCT2E9GPAFgfAskPAvArl8t1oK2tzZC0EIavzxCNRm8jIm7rVlnIJBHdFwqF/mpkpYbPKAWDwVcEQWhjjB01um4b8bqmadcZLQZg8rqEubPltwA2m2mHI+eJ6NFQKFRSzIEeTJ1zDQaDryiKsocx9gusco7eZmQB/NztdgfMFAPgsHJnnr6+vq2qqj4E4AEAl8sUY4Yx9idBEA61trae5mGQmyB5jh8/3ihJ0kMAHgRg3dJsxUkT0fOqqh7KhUVxg7sgecLhcL0kSXfm1s/osMqPAo4DOJzJZF7at2+fJWlKLRNkPuFwuEUUxbsxu0LDTs7m3wNwRBTFF3g1S8WwhSDz6e/vb8hms58gooOMsYMAmg02MQTgGGPsqKqq/2pvb+eX5FEHthOkkK6uLp/T6WwBcC0RBYioRRCEDURUidn0hLX4KCveNIAJzGY4miaieC5TxUnG2EmHw3Fy7969Fy35ITr5Pwwxmsoiz48zAAAAAElFTkSuQmCC";
export default profileDefaultPicture;