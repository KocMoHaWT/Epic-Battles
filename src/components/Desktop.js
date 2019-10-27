import React from 'react';

const DEFAULT_VIEWPORT_STYLE = {
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  position: 'relative',
};

const DEFAULT_SPACE_STYLE = {
  top: 0,
  left: 0,
  position: 'absolute',
};

export default class Desktop extends React.Component {

  constructor(props) {
    super(props);
    const { width, height } = this.props;

    this.shouldMonitorSizes = !(width && height);
    this.bounds = (width && height) ? { x: width, y: height } : null;
    this.viewportSize = null;
    this.state = {
      viewport_x: 675,
      viewport_y: 643,
      last_client_x: 0,
      last_client_y: 0,
      dragging: false,
    }
  }

  createSpaceStyle() {
    const configuredStyle = {
      top: `-${this.state.viewport_y}px`,
      left: `-${this.state.viewport_x}px`,
    };
    return { ...DEFAULT_SPACE_STYLE, ...configuredStyle };
  }

  createViewportStyle() {
    const configuredStyle = this.props.style || {};
    return { ...DEFAULT_VIEWPORT_STYLE, ...configuredStyle };
  }

  handleDragOver(event) {
    if (!this.state.dragging) return;
    if (!this.bounds) return;
    if (!this.viewportSize) return;

    const {
      clientX,
      clientY,
    } = event;

    const dX = clientX - this.state.last_client_x;
    const dY = clientY - this.state.last_client_y;

    const maxX = this.bounds.x - this.viewportSize.w;
    const maxY = this.bounds.y - this.viewportSize.h;

    const resultingX = Math.max(0, Math.min(maxX, this.state.viewport_x - dX));
    const resultingY = Math.max(0, Math.min(maxY, this.state.viewport_y - dY));

    return this.setState((state) => ({
      ...state,
      viewport_x: resultingX,
      viewport_y: resultingY,
      last_client_x: clientX,
      last_client_y: clientY,
    }));
  }

  handleDragStart(event) {
    const {
      clientX,
      clientY,
    } = event;

    return this.setState((state) => ({
      ...state,
      dragging: true,
      last_client_x: clientX,
      last_client_y: clientY,
    }));
  }

  handleDragEnd() {
    return this.setState((state) => ({
      ...state,
      dragging: false,
      last_client_x: 0,
      last_client_y: 0,
    }));
  }

  preserveBounds(element) {
    if (!element) return;
    if (!this.shouldMonitorSizes) return;
    const boundingRectangle = element.getBoundingClientRect();
    this.bounds = {
      x: boundingRectangle.width,
      y: boundingRectangle.height
    };
  }

  preserveViewportSize(element) {
    if (!element) return;
    const boundingRectangle = element.getBoundingClientRect();
    this.viewportSize = {
      w: boundingRectangle.width,
      h: boundingRectangle.height
    };
  }

  render() {
    return (<div className="desktop">
      <div
        className="desktop__viewport"
        ref={e => this.preserveViewportSize(e)}
        style={this.createViewportStyle()}
      >
        <div
          className="desktop__space"
          ref={e => this.preserveBounds(e)}
          style={this.createSpaceStyle()}
          onDragStart={event => this.handleDragStart(event)}
          onDragOver={event => this.handleDragOver(event)}
          onDragEnd={event => this.handleDragEnd(event)}
        >
          {this.props.children}
        </div>
      </div>
    </div>);
  }

}
