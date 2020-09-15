import * as React from "react";
<<<<<<< HEAD
// interface IBaidu {
//     Map: any,
//     Point: any
// }

// interface Map{

// }

// interface Point{
    
// }

// interface BMapGL{

// }
=======
>>>>>>> 0b2796974fb9ea96fde4b7d7a2267201c40f36bd

// interface Window{
//     init: ()=>Promise<typeof BMapGL>
// }

const BJmap: React.FC = ():JSX.Element => {
    let Mp = (ak: string) => {
        return new Promise(function (resolve, reject) {
            let script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `http://api.map.baidu.com/api?type=webgl&v=1.0&ak=${ak}&callback=init`;
            document.head.appendChild(script);
            (window as any).init = () => {
                resolve((window as any).BMapGL)
            }
        })
    }
    React.useEffect(()=>{
<<<<<<< HEAD
       
        Mp("cajNyShk81OyY4NlzfKNP94KW7luy9tH").then((BMapGL) => {
            // var BMapGL = (window as any).BMapGL
            console.log(BMapGL)
            let map = new BMapGL.Map('allmap');
            map.centerAndZoom(new BMapGL.Point(116.320569, 40.072627), 19);         // 创建Map实例
                 // 创建Map实例
=======
        Mp("PAZGg1jfimrTHCIAsoQc9zfsRbh").then(BMapGL => {
            // let map = new BMapGL.Map('allmap');
            // map.centerAndZoom(new BMapGL.Point(116.320569, 40.072627), 19);         // 创建Map实例
            let map = new BMapGL.Map('allmap');
            map.centerAndZoom(new BMapGL.Point(116.320569, 40.072627), 19);         // 创建Map实例
>>>>>>> 0b2796974fb9ea96fde4b7d7a2267201c40f36bd
            map.enableScrollWheelZoom(true);
            map.setHeading(64.5);
            map.setTilt(73);                 //启用滚轮放大缩小
        });
    },[])
    return (
        <div style={{padding:'24px'}}>
            <div id='allmap' style={{ width: 1024, height: 600 }}></div>
        </div>
    )
}

export default BJmap
