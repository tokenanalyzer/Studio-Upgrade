import { Component, type ReactNode } from "react";
import FallbackOrb from "./FallbackOrb";

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export default class OrbErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return <FallbackOrb />;
    return this.props.children;
  }
}
