import * as React from 'react';

interface Props {
  moduleName: string;
  isSelected: boolean;
  description: string;
  handleSelectionChange: (moduleName: string) => void;
}

class Module extends React.Component<Props, any> {
  constructor(props) {
    super(props);
    this._onSelectionChanged = this._onSelectionChanged.bind(this);
  }

  static propTypes = {
    moduleName: React.PropTypes.string.isRequired,
    isSelected: React.PropTypes.bool.isRequired,
    handleSelectionChange: React.PropTypes.func.isRequired
  }

  render() {
    const fontClass = 'glyphicon ' + (this.props.isSelected ? 'glyphicon-ok' : 'glyphicon-remove');
    const panelClass = 'panel ' + (this.props.isSelected ? 'panel-success' : 'panel-danger');
    return (
      <div className={ panelClass } style={{ cursor: 'pointer' }} onClick={ this._onSelectionChanged }>
        <div className="panel-heading">
          <h3 className="panel-title">
            { this.props.moduleName + ' ' }
            <span className={ fontClass }></span>
          </h3>
        </div>
        <div className="panel-body">
            { this.props.description }
        </div>
      </div>
    );
  }

  _onSelectionChanged() {
    this.props.handleSelectionChange(this.props.moduleName);
  }
}

export default Module;
