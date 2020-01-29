import React, { Component } from "react";
import { popModal } from "../../utils/popupUtil.js";

// JS rendering CSS
import {
  ErrorBoundaryContainer,
  ErrorBoundaryText,
  ErrorBoundarySVG
} from "./ErrorBoundaryStyles";

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    popModal(
      "How unfortunate ಥ_ಥ",
      "You likely experienced connection issues."
    );
  }

  render() {
    const { hasErrored } = this.state;
    if (hasErrored) {
      return (
        <ErrorBoundaryContainer>
          <ErrorBoundaryText>Please, get back to us shortly!</ErrorBoundaryText>
          <ErrorBoundarySVG />
        </ErrorBoundaryContainer>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
