import React, { useState, useEffect } from 'react';
import { TreeSelectCascader } from '@/components/basic';

const Test1 = (props) => {
  const [testList, setTestList] = useState();

  const onDel = () => {
    // 获取渲染元素的父元素
    let dom = document.getElementById('testId');
    // 获取要删除的渲染元素
    let child = document.getElementsByClassName('test-item');
    // dom.childNodes 是 div绑key那层
    if (dom.childNodes.length) {
      dom.childNodes.forEach((item, index) => {
        item.removeChild(child[0]);
      });
    }
    setTestList([]);
  };

  const onAdd = () => {
    setTestList([{ id: 6 }, { id: 7 }]);
  };

  useEffect(() => {
    setTestList([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }]);
  }, []);

  return (
    <div className='page-main'>
      <div className='react'>Test1</div>
      <TreeSelectCascader treeData={[]} />
      <div onClick={onAdd}>新增</div>
      <div onClick={onDel}>删除</div>
      <div id='testId' className='test-list'>
        {testList &&
          testList?.length &&
          testList.map((item) => (
            <div key={item.id}>
              <div className='test-item'>{item?.id || ''}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Test1;
