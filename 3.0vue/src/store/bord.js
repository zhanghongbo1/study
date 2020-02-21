// export const show= {
//     namespaced: true,
//     state:{
//      dig:false   
//     },
//     mutations: {
//         digchange(state){
//             state.dig=true
//         }
//     },

// }
import myaxios from '@/assets/request'
export const show = {
    namespaced: true,
    state: {
        dig: false,
        message:[],
        total:"",
        imgSrc:""
    },
    mutations: {
        digchange(state) {
            state.dig = !state.dig
        },
        changefalse(state){
            state.dig = false
        },
        mesChange(state,val){ 
            state.message=val
        },
        mes(state,val){
            state.message=val.data
            state.total=val.total  
        },
        getImg(state,val){
            state.imgSrc=val
        }

     
    },
    actions: { 
        //提交数据
         getMessage({commit},val){
          myaxios.post("/message", {
                  info: val['val'],
                  user:val.user
                }).then(res=>{
                    
                    if(res.code=200){
                        val['this'].$message( {message: '提交成功',
                        type: 'success'})
                    }
                    commit('mesChange',res.data.slice(0,10))
                })
         
        },
        //获取全部数据
        getmes({commit}){
             myaxios.post('/getmes').then(res=>{
                 //console.log(res)
              commit('mes',{data:res.data,total:res.total})
            
    })
        },
        //点赞加1
        numadd({dispatch},val){
            //console.log(re)
            myaxios.post('/num',{_id:val}).then(res=>{
                
                if(res.code==200){
                   dispatch('getmes')
                }
            })
        },
        //分页
        page({commit},val){
            //console.log(1)
            myaxios.post('/page',{page:val}).then(res=>{
                console.log(res)
                if(res.code=200){
                    commit('mesChange',res.data)
                }
            })
        },
        //获取图片
        upload({commit},val){
            //console.log(1)
            myaxios.post('/img',val).then(res=>{
                console.log(res)
                if(res.status=2){
                    commit('getImg',res.imgUrl)
                }
            })
        }
    }
};

