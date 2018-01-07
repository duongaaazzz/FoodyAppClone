import {
        Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

const heightHeaderConst = width * 1.05;

export default {
        Header: {
                heightHeader: heightHeaderConst,
                paddingLeftRightSearch: 10,
                heightSearch: heightHeaderConst * 0.1,
                widthImgQuickFunction: width / 4.45
        },

};

