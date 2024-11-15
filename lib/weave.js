class Weave {
  /**
   * Called at the beginning of the write phase. */
  async weave() {}
  /**
   * Whether to skip code blocks during read and write phase. */
  skipcode() {
    return false;
  }
  /**
   * Manipulate each line during the read phase. */
  phase1(line) {
    return line;
  }
  /**
   * Manipulate each line during the write phase.
   * A member `extraline` can be returned that will be written after this line. */
  phase2(line) {
    return { line };
  }
  /**
   * Return code to be output during the write phase at the beginning of a code block. */
  code(line) {}
  /**
   * Sort the table of FunnelWeb macros. */
  sortindex(index) {}
}

module.exports = Weave;
