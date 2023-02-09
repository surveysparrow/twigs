import {Box} from '../../box/box';
import {Text} from '../../text/text';
import {Flex} from '../../flex/flex'
import { defaultTheme } from '../../../stitches.config';

const {colors, fontSizes, fontWeights, borderWidths, radii} = defaultTheme;

export const AllColors = ()=>{
    return(
            Object.keys(colors).map((key) => (
            <div>
                <Box
                css={{
                    backgroundColor: colors[key],
                    color: 'white',
                    height: '100px',
                    p: 0,
                    width: '150px',
                    borderRadius:'5px',
                    border:'1px solid #b0b0b0'
                }}
                >
                </Box>
                <Flex css={{gap:'5px',justifyContent:'space-between'}}>
                    <Text size="sm" css={{
                        marginTop:'5px'
                    }}>
                        {key}
                    </Text>
                    <Text size="sm" css={{
                        marginTop:'5px'
                    }}>
                        {Object.values(colors[key])}
                    </Text>
                </Flex>
            </div>
            ))
    )
}

export const AllFontSizes = ()=>{
    return(
        Object.keys(fontSizes).map((key) => (
        <Box css={{borderTop:'1px solid rgba(0,0,0,.1)',padding:'0px 20px'}}>
            <Text size="sm">{key}&emsp;&emsp;&emsp;{fontSizes[key]}</Text>
            <Text css={{
                fontSize:fontSizes[key],
                marginTop:'10px',
                fontWeight:'500'
            }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vitae laboriosam aut culpa pariatur dolorem. Corrupti excepturi quae doloremque! Aliquam ut explicabo provident vero? Impedit quae possimus corrupti eius recusandae? </Text>
        </Box>
        ))
    )
}

export const AllFontWeights = ()=>{
    return(
        Object.keys(fontWeights).map((key) => (
        <Box css={{borderTop:'1px solid rgba(0,0,0,.1)'}}>
            <Text size="sm">{key} {fontWeights[key]}</Text>
            <Text css={{
                fontWeight:fontWeights[key],
                marginTop:'10px',
                fontSize:'2rem'
            }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vitae laboriosam aut culpa pariatur dolorem.</Text>
        </Box>
        ))
    )
}

export const AllBorderWidths = ()=>{
    return(
        Object.keys(borderWidths).map((key) => (
        <div>
            <Text size="sm">{key}&emsp;{borderWidths[key]}</Text>
            <Box size="lg" css={{
                border:`${borderWidths[key]} solid black`,
                marginTop:'10px',
                padding:'10px',
                color:'black'
            }}>SurveySparrow</Box>
        </div>
        ))
    )
}

export const AllRadii = ()=>{
    return(
        Object.keys(radii).map((key) => (
        <div>
             <Box
                css={{
                    backgroundColor: '#56B0BB',
                    color: 'white',
                    height: '150px',
                    borderRadius:radii[key],
                    p: 0,
                    width: '150px',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    flexDirection:'column'
                }}
                >
                <Text size="lg" css={{color:'white',margin:'0'}}>{key}</Text>
                <Text size="lg" css={{color:'white',margin:'0'}}>{radii[key]}</Text>
            </Box>
        </div>
        ))
    )
}