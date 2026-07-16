# Last updated: 16/7/2026, 9:15:41 pm
class Solution:
    def totalWaviness(self, num1: int, num2: int) -> int:
        totalWavy = 0

        def waviness(num: int) -> int:
            wavy = 0
            numStr = str(num)
            for i in range(1, len(numStr) - 1):
                if (
                    int(numStr[i]) < int(numStr[i - 1])
                    and int(numStr[i]) < int(numStr[i + 1])
                ) or (
                    int(numStr[i]) > int(numStr[i - 1])
                    and int(numStr[i]) > int(numStr[i + 1])
                ):
                    wavy += 1
            return wavy

        for num in range(num1, num2 + 1):
            if num < 100:
                continue
            totalWavy += waviness(num)
        return totalWavy
