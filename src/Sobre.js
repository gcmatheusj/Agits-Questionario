import React, { Component } from 'react'
import Pergunta1 from './Components/Pergunta1'
import Pergunta2 from './Components/Pergunta2'
import Pergunta3 from './Components/Pergunta3'
import Pergunta5 from './Components/Pergunta5'
import Pergunta6 from './Components/Pergunta6'
import Pergunta7 from './Components/Pergunta7'
import Pergunta8 from './Components/Pergunta8'
import Typography from '@material-ui/core/Typography'


class Sobre extends Component {
    render() {
        return (
            <div>
                <Typography variant="display1" component="label" >
                    Sobre Você:<br />
                </Typography>
                <br /><div>
                    <Pergunta1 />
                </div>
                <br /><div>
                    <Pergunta2 />
                </div>
                <br /><div>
                    <Pergunta3 />
                </div>
                <br /><div>
                    <Pergunta5 />
                </div>
                <br /><div>
                    <Pergunta6 />
                </div>
                <br /><div>
                    <Pergunta7 />
                </div>
                <br /><div>
                    <Pergunta8 />
                </div>
            </div>
        )
    }
}
export default Sobre