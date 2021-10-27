const getNewTreeData = (treeData, currentKey, child) => {
  const loop = (data) => {
    data.forEach((item) => {
      //클릭한 노드 키와 데이터 키 비교
      if (curKey === item.key) {
        //children[]이 존재 하지 않으면 child을 추가한다. 아니면 loop를 실행
        if (item.children === undefined) {
          item.children = child;
        } else {
          loop(item.children);
        }
      } else {
        if (item.children !== undefined) {
          loop(item.children);
        }
      }
    });
  };
  loop(treeData);
};
