import { useState, useEffect } from 'react';
import { Select, Tree, message } from 'antd';
import './index.scss';

const { Option } = Select;

const TreeSelectCascader = (props) => {
  const {
    treeData = [],
    defaultExpandAll = false,
    fieldNames = { title: 'title', key: 'key', children: 'children' },
    placeholder = '请选择',
    parentKey = 'parentId',
    disabled = false,
    value = null,
    onChange = () => {},
  } = props;

  const [treeValue, setTreeValue] = useState([]);
  const [selectName, setSelectName] = useState(null);
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectList, setSelectList] = useState([]);
  const [messageApi, messageContent] = message.useMessage();

  // 选择树节点
  const onTreeSelect = (data, e) => {
    e.stopPropagation();
    // if (data[fieldNames.children] && data[fieldNames.children]?.length) {
    //   messageApi.open({ type: "error", content: "请选择叶子节点" });
    // }
    setSelectOpen(false);
    onChange(data[fieldNames.key]);
  };

  const treeToList = (list) => {
    let _list = [];
    const loop = (list) => {
      list.forEach((item) => {
        let _children = item[fieldNames.children] || [];
        list.push(item);
        if (_children && _children.length) loop(_children);
      });
    };
    loop(list);
    return _list;
  };

  const findSelectName = (value) => {
    let _name = [];
    const loop = (list) => {
      list.forEach((item) => {
        if (item[fieldNames.key] == value) {
          _name.unshift(item[fieldNames.title]);
          if (item[parentKey]) loop(item[parentKey]);
        }
      });
    };
    loop(selectList);
    setSelectName(_name.join('-') || null);
  };

  useEffect(() => {
    setSelectList(treeToList(treeData));
  }, [treeData]);

  useEffect(() => {
    if (selectList && selectList?.length && value) {
      setTreeValue(value ? [value] : []);
      findSelectName(value);
    } else {
      setTreeValue([]);
      setSelectName(null);
    }
  }, [value, selectList]);

  return (
    <>
      <Select
        popupClassName='tree-select-cascader-style'
        placeholder={placeholder}
        value={selectName}
        open={selectOpen}
        disabled={disabled}
        onClick={() => setSelectOpen(true)}
        onBlur={() => setSelectOpen(false)}
      >
        <Option value='占位用'>
          {treeData?.length > 0 ? (
            <Tree
              treeData={treeData}
              defaultExpandAll={defaultExpandAll}
              fieldNames={fieldNames}
              selectedKeys={treeValue}
              blockNode
              titleRender={(data) => {
                return (
                  <div className='tree-title' onClick={data?.disabled ? () => {} : (e) => onTreeSelect(data, e)}>
                    {data?.[fieldNames.title] || '--'}
                  </div>
                );
              }}
            />
          ) : null}
        </Option>
      </Select>
      {messageContent}
    </>
  );
};

export default TreeSelectCascader;
