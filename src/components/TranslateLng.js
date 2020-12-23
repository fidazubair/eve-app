
import React  from 'react';
import '../App.css'
import { withTranslation, Trans } from 'react-i18next'

class TranslateLng extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "en"
        }
    }
    state={
        isClicked: false
    }
    onLanguageHandle = (event) => {
        console.log('jhsdhhds',event.target.value)
        let newLang = event.target.value;
        this.setState({value: newLang})
        this.props.i18n.changeLanguage(newLang)
    }

    renderRadioButtons = () => {
        return (
            <div><input
                checked={this.state.value === 'en'}
                name="language" onChange={(e) => this.onLanguageHandle(e)} value="en" type="radio" />English &nbsp;
                <input name="language" value="jp"
                       checked={this.state.value === 'jp'}
                       type="radio" onChange={(e) => this.onLanguageHandle(e)} />Japanese</div>
        )
    }

    render() {
        let cssProperties = {}
        if (this.state.isClicked) {
           
            cssProperties['--btn-bg-color'] = 'lightblue'
            cssProperties['--btn-color'] = 'black'
            cssProperties['--btn-float'] = 'right'
        }
        const {t} = this.props
        console.log('this is', this)
        return (
            <div>
                {this.renderRadioButtons()}
                <h1><Trans>Paragraph</Trans></h1>
                <br/>
                <table>
                    <tbody>
                    <tr>
                        <td style={{width: '20%'}}>{t('author.title')}</td>
                        <td style={{width: '5%'}}>:</td>
                        <td style={{width: '75%'}}>{t('author.value')}</td>
                    </tr>
                    <tr>
                        <td style={{width: '20%'}}>{t('description.title')}</td>
                        <td style={{width: '5%'}}>:</td>
                        <td style={{width: '75%'}}>{t('description.value')}</td>
                    </tr>
                    <tr>
                        <td style={{width: '20%'}}>{t('description.title')}</td>
                        <td style={{width: '5%'}}>:</td>
                        <td style={{width: '75%'}}>{t('description.value')}</td>
                    </tr>
                    </tbody>
                </table>

                <div className='container' style={cssProperties} onClick={() => { this.setState({ isClicked: !this.state.isClicked }) }}>
                    <button  className='btn'>
                        Hellooo
                    </button>
                </div>
            </div>
        );
    }

}

export default withTranslation()(TranslateLng);