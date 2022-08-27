import { Component } from 'react';
import { View, Text, Image } from '@tarojs/components';
import './index.scss';

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='indexBox'>
        <View className='indexMain'>
          <View className='topBox'>
            <View className='integral'>
              <Image className='integralIcon' src='https://s3.bmp.ovh/imgs/2022/08/27/c9d844750dc2d666.png'></Image>
              <Text className='integralText'>积分:300000</Text>
            </View>
          </View>
          <View className='centerBox'></View>
          <View className='bottomBox'>
            <Image className='btnFirst' src='https://s3.bmp.ovh/imgs/2022/08/27/62a019db4b62bd98.png'></Image>
            <Image className='btnSecond' src='https://s3.bmp.ovh/imgs/2022/08/27/2963de6239993932.png'></Image>
            <Image className='btnThird' src='https://s3.bmp.ovh/imgs/2022/08/27/c4905cce2d2e73fb.png'></Image>
          </View>
        </View>
      </View>
    );
  }
}
