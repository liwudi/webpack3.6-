/**
 * Created by mapbar_front on 2017/10/5.
 */

import { square, cube } from './math'

document.write('我是中国人');
function component() {
    var element = document.createElement('div');
    element.innerHTML = [
        'hello webpack!',
        '5 cube is equal to '+cube(5)
    ].join('\n\n');
    return element
}

document.body.appendChild(component());