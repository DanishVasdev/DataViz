import React from 'react'
import { max } from 'd3'

export function gravity(p1,p2,p3,p4){
    const p=max([p1,p2,p3,p4])
    if(p===p1){
        const p1p=max([p2,p3,p4]);
        if(p1p===p2){
            return [(p1/(p1+p2)),(1)]
        }
        if(p1p===p3){
            return [(p1/(p1+p3)),(p1/(p1+p3))]
        }
        if(p1p===p4){
            return [1,(p1/(p1+p4))]
        }
    }
    if(p===p2){
        const p2p=max([p1,p3,p4]);
        if(p2p===p1){
            return [(-p2/(p1+p2)),(1)]
        }
        if(p2p===p3){
            return [(-1),(p2/(p2+p3))]
        }
        if(p2p===p4){
            return [-p2/(p4+p2),(p2/(p4+p2))]
        }
    }
    if(p===p3){
        const p3p=max([p1,p2,p4]);
        if(p3p===p1){
            return [(-p3/(p1+p3)),(-p3/(p1+p3))]
        }
        if(p3p===p2){
            return [(-1),(-p3/(p2+p3))]
        }
        if(p3p===p4){
            return [-p3/(p4+p3),(-1)]
        }
    }
    if(p===p4){
        const p4p=max([p2,p3,p1]);
        if(p4p===p1){
            return [1,(-p4/(p1+p4))]
        }
        if(p4p===p2){
            return [(p4/(p4+p2)),(-p4/(p4+p2))]
        }
        if(p4p===p3){
            return [p4/(p3+p4),-1]
        }
    }
    //return [(Math.exp(p1)-Math.exp(p2)-Math.exp(p3)+Math.exp(p4))/4,(Math.exp(p1)+Math.exp(p2)-Math.exp(p3)-Math.exp(p4))/4]
    // var min_x=0
    // var min_y=0
    // var min_force=1
    // var x;
    // var y;
    // for(x=-1+1/40;x<=1-1/40;x+=1/400){
    //     for(y=-1+1/20;y<=1-1/20;y+=1/200){
    //         var r1=((x-1)**2+(y+1)**2)**(0.5)
    //         var r2=((x+1)**2+(y+1)**2)**(0.5)
    //         var r3=((x+1)**2+(y-1)**2)**(0.5)
    //         var r4=((x-1)**2+(y-1)**2)**(0.5)
    //         var force=p1*r1+p2*r2+p3*r3+p4*r4;
    //         if(force<min_force){
    //             min_x=x;
    //             min_y=y;
    //             min_force=force;
    //         }
    //     }
    // }
    // return [min_x,min_y];
}