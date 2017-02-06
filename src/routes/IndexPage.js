import React from 'react';
import { connect } from 'dva';
import { Button, Flex, Icon, Tabs, List, ListView } from 'antd-mobile';
const TabPane = Tabs.TabPane;
const Item = List.Item;
const Brief = Item.Brief;

import styles from './IndexPage.less';

function IndexPage({
  callback = () => {},
  onEndReached = () => {
    console.log('end reached');
  }
}) {
  let data = [
    {
      id: 1,
      title: '相约酒店',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
      id: 2,
      title: '麦当劳邀您过周末',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
      id: 3,
      title: '食惠周',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
      id: 4,
      title: '麦当劳邀您过周末1',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
      id: 5,
      title: '食惠周2',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
  ];

  let id = 6;
  data.forEach(item => {
    data.push({
      id: id++,
      title: item.title + id,
      des: item.des + id
    });
  })

  data.forEach(item => {
    data.push({
      id: id++,
      title: item.title + id,
      des: item.des + id
    });
  })

  let index = data.length - 1;

  const NUM_SECTIONS = 5;
  const NUM_ROWS_PER_SECTION = 5;
  let pageIndex = 0;

  const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
  const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

  const dataSource = new ListView.DataSource({
    getRowData,
    getSectionHeaderData: getSectionData,
    rowHasChanged: (row1, row2) => row1 !== row2,
    sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
  });

  let dataBlob = { 'sectionname': 'sectionname' };
  let sectionIDs = [ 'sectionname' ];
  let rowIDs = [[]];

  function genData (pIndex = 0) {

    data.forEach((item, index) => {
      // const rowName = `S1, R${i}`;
      const rowName = item.title;
      rowIDs[0].push(rowName);
      dataBlob[rowName] = item;
    });

    // new object ref
    rowIDs = [].concat(rowIDs);
  }

  genData();

  let destDataSource = dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs);

  const row = (rowData, sectionID, rowID) => {
    // console.log(rowData)
    return (
      <Item multipleLine>{rowData.title} <Brief>{rowData.des}{rowID}</Brief></Item>
    );
  };

  return (
    <div className={styles.normal}>
      <Flex justify="between" className={styles['top-bar']}>
        <Flex.Item><div className={styles['top-bar-item']}>本月</div></Flex.Item>
        <Flex.Item><div className={styles['top-bar-item']}>本月</div></Flex.Item>
        <Flex.Item><div className={styles['top-bar-item']}>本月</div></Flex.Item>
        <Flex.Item><div className={styles['top-bar-item']}>本月</div></Flex.Item>
        <Flex.Item><div className={styles['top-bar-item']}>本月</div></Flex.Item>
        <Flex.Item><div className={styles['top-bar-item']} style={{ borderLeft: "1px solid #f0f0f0" }}><Icon type="calendar" /></div></Flex.Item>
      </Flex>

      <div style={{ height: '3.5rem', backgroundColor: '#888' }}></div>

      <Tabs defaultActiveKey="1" onChange={callback} swipeable={false}>
        <TabPane tab="待处理" key="1">
          <List renderHeader={() => null} className="my-list">
            <Item multipleLine>垂直居中对齐 <Brief>辅助文字内容</Brief></Item>
            <Item multipleLine>垂直居中对齐 <Brief>辅助文字内容</Brief></Item>
            <Item multipleLine>垂直居中对齐 <Brief>辅助文字内容</Brief></Item>
            <Item multipleLine>垂直居中对齐 <Brief>辅助文字内容</Brief></Item>
          </List>
        </TabPane>
        <TabPane tab="最新收到" key="2">
          <ListView
            dataSource={destDataSource}
            renderFooter={() => <div style={{ padding: 30, textAlign: 'center' }}>加载中...</div>}
            style={{
              height: document.body.clientHeight * 3 / 4,
              overflow: 'auto',
              margin: '0.1rem 0',
            }}
            renderRow={row}
            scrollRenderAheadDistance={400}
            scrollEventThrottle={20}
            onEndReached={onEndReached}
            onEndReachedThreshold={10}
          />
        </TabPane>
      </Tabs>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
