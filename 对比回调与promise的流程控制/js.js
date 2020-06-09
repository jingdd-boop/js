function moveTo(el,x,y,cb) {
            el.style.transform = `translate(${x}px,${y}px)`;
            setTimeout(function(){
                cb && cb();
            },1000);
        }
        let el = document.querySelector('button').addEventListener('click',e => {
            moveTo(el,100,100,function(){
                moveTo(el,200,200,function(){
                    moveTo(el,100,300,function(){
                        console.log('移动结束·')
                    })
                });
            });
        });
 