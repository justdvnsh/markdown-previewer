marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

class MarkDown extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      input: '',
      output: ''
    }
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    e.preventDefault();
    this.setState({ 
      input: e.target.value,
      output: marked(e.target.value)
    });
  }
  render() {
    return (
      <div className="container-fluid">
      
        <div className="row">
            <div className="col-md-6">
              <div className="form-group">
              <center><h1>Input</h1></center>
              <textarea value={this.state.input} onChange={this.handleChange} className="form-control" />
              </div><br/>
            </div>

            <div className="col-md-6">
                <div className="container">
                  <center><h1>Output</h1></center>
                    <div dangerouslySetInnerHTML={{__html: this.state.output}}></div>
</div>
            </div>
         </div> 
      </div>
    )
  }
}

ReactDOM.render(<MarkDown />, document.getElementById('root'))
