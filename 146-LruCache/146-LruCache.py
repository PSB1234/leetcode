# Last updated: 16/7/2026, 9:20:20 pm
class LRUNode:
  key:int
  value:int
  prev:LRUNode|None
  next:LRUNode|None
  def __init__(self,key:int = 0 ,value:int = 0) -> None:
      self.key = key
      self.value =value
      self.prev = None
      self.next =None

class LRUCache:
    capacity = 0
    match: dict[int, LRUNode]
    left:LRUNode
    right:LRUNode
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.left = LRUNode()
        self.right = LRUNode()
        self.match = {}
        self.left.next = self.right
        self.right.prev = self.left
    def _remove(self,oldElement:LRUNode):
      prev = oldElement.prev
      next = oldElement.next
      if prev and next:
        prev.next = next
        next.prev = prev
      oldElement.next =None
      oldElement.prev =None
      del oldElement
    def _insert(self,newElement:LRUNode):
      prev = self.right.prev
      next = self.right
      if prev != None:
        prev.next = newElement
      next.prev = newElement
      newElement.next = next
      newElement.prev =prev
      
    def get(self, key: int) -> int:
        getElement = self.match.get(key)
        if getElement:
          self._remove(getElement)
          self._insert(getElement)
          return getElement.value
        return -1
    def put(self, key: int, value: int) -> None:
        getElement = self.match.get(key)
        if getElement:
          self._remove(getElement)
          getElement.value = value
          self._insert(getElement)
          return
        else:
          temp = LRUNode(key,value)
          self._insert(temp)
          self.match[key] = temp
          if len(self.match) > self.capacity:
            leastUsed = self.left.next
            if leastUsed != None:
              self._remove(leastUsed)
              self.match.pop(leastUsed.key)
        


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)