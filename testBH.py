from pythonds.trees import BinaryHeap

bh = BinaryHeap()
bh.insert(5)
bh.insert(7)
bh.insert(3)
bh.insert(11)
print(bh.delMin())
print(bh.delMin())
print(bh.delMin())
print(bh.delMin())

nh = BinaryHeap()
nh.buildHeap([27,5,9,11,14,18,19,21,33,17])
nh.insert(7)
print(nh.delMin())