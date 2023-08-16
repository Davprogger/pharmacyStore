import { createSlice } from "@reduxjs/toolkit"
import bint from '../../assets/images/bint.png'
import tanzif from '../../assets/images/tanzif.png'
import top from '../../assets/images/top.png'

const initialState = {
    products: {
        bandages: [
            {
                id: 0,
                name: 'բժշկական ԲԻՆՏ ՍՏԵՐԻԼ',
                sterile: true,
                sizes: [
                    {
                        x: 16,
                        y: 10
                    },
                    {
                        x: 14,
                        y: 7
                    },
                    {
                        x: 10,
                        y: 5
                    }
                ],
                image: bint,
                description: 'lorem'
            },
            {
                id: 1,
                name: 'բժշկական ԲԻՆՏ ոչ ՍՏԵՐԻԼ',
                sterile: false,
                sizes: [
                    {
                        x: 16,
                        y: 10
                    },
                    {
                        x: 14,
                        y: 7
                    },
                    {
                        x: 10,
                        y: 5
                    }
                ],
                image: bint,
                description: 'lorem'
            },

        ],
        tanzif: [
            {
                id: 0,
                name: 'բժշկական թանզիֆ ոչ ՍՏԵՐԻԼ',
                sterile: false,
                sizes: [
                    {
                        x: 90,
                        y: 3
                    },
                    {
                        x: 90,
                        y: 5
                    },
                    {
                        x: 90,
                        y: 10
                    }
                ],
                image: tanzif,
                description: 'lorem'
            }
        ],
        napkins: [
            {
                id: 0,
                name: 'բժշկական անձեռոցիկ  ՍՏԵՐԻԼ (ինդիվիդուալ)',
                sterile: true,
                layers: 8,
                pieces: 10,
                dimensions: {
                    y: 7.5,
                    x: 7.5
                },
                image: bint,
                description: 'Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
            },
            {
                id: 1,
                name: 'բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ',
                sterile: false,
                layers: 8,
                pieces: 10,
                dimensions: {
                    y: 4,
                    x: 5.5
                },
                image: bint,
                description: 'Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
            },
            {
                id: 2,
                name: 'բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ',
                sterile: false,
                layers: 8,
                pieces: 10,
                dimensions: {
                    y: 7.5,
                    x: 7.5
                },
                image: bint,
                description: 'Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
            },
            {
                id: 3,
                name: 'բժշկական անձեռոցիկ  ՍՏԵՐԻԼ (ինդիվիդուալ)',
                sterile: true,
                layers: 10,
                pieces: 100,
                dimensions: {
                    y: 3.5,
                    x: 3.5
                },
                image: bint,
                description: 'Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
            },
            {
                id: 4,
                name: 'բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ',
                sterile: false,
                layers: 8,
                pieces: 10,
                dimensions: {
                    y: 7.5,
                    x: 7.5
                },
                image: bint,
                description: 'Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
            },
            {
                id: 5,
                name: 'բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ',
                sterile: false,
                layers: 8,
                pieces: 10,
                dimensions: {
                    y: 7.5,
                    x: 7.5
                },
                image: bint,
                description: 'Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
            },
            {
                id: 6,
                name: 'բժշկական անձեռոցիկ  ՍՏԵՐԻԼ (ինդիվիդուալ)',
                sterile: true,
                layers: 10,
                pieces: 12,
                dimensions: {
                    y: 8.5,
                    x: 7.5
                },
                image: bint,
                description: 'Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
            },
            {
                id: 7,
                name: 'բժշկական անձեռոցիկ ոչ ՍՏԵՐԻԼ',
                sterile: false,
                layers: 8,
                pieces: 10,
                dimensions: {
                    y: 10,
                    x: 15
                },
                image: bint,
                description: 'Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
            },
            
        ],
        tops: [
            {
                id: 0,
                name: 'ԹՈՓԵՐ',
                sterile: false,
                sizes: [
                    {
                        x: 90,
                        y: 1000
                    },
                    {
                        x: 90,
                        y: 2000
                    },
                    {
                        x: 120,
                        y: 2000
                    }
                ],
                image: top,
                description: 'lorem'
            }
        ]
    }
}

export const productsSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        }
    }
})

export const {setProducts} = productsSlice.actions

export default productsSlice.reducer