import { useState } from "react";

interface Item {
  id: number;
  title: string;
  description: string;
}
//더미 객체 생성 후 배열에 push 작업
const itemData = () => {
  const itemList = [];
  for (let i = 0; i < 5; i++) {
    const item = {
      id: i + 1,
      title: `제목${i + 1}`,
      description: `내용${i + 1}`,
    };
    itemList.push(item);
  }
  return itemList;
};

const SectionPage1: React.FC = () => {
  const [mapList, setMapList] = useState<Item[]>(itemData());

  //각 객체에 내용 추가해보기
  const newItemAdd = () => {
    const newItem = {
      id: mapList.length + 1,
      title: `추가`,
      description: `추가된 내용`,
    };
    setMapList([...mapList, newItem]);
  };

  //각 객체에 내용 삭제해보기
  const newItemDel = (id: number) => {
    const newList = mapList.filter((item) => {
      return item.id !== id;
    });
    setMapList(newList);
  };

  return (
    <>
      {/* 컴포넌트화 작업 */}
      <div>제목: 더미 object 생성 후 array에 push</div>
      <div>일시: 2024-03-16</div>
      {mapList.map((item) => (
        <>
          <div>{item.id}</div>
          <div>{item.title}</div>
          <div>{item.description}</div>
          <button
            onClick={() => {
              newItemDel(item.id);
            }}
          >
            삭제
          </button>
        </>
      ))}
      <button onClick={newItemAdd}>추가</button>
    </>
  );
};

export default SectionPage1;
