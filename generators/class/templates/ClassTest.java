/**
 * Copyright (C) <%= new Date().getFullYear() %> <%= props.author %>.
 */
package <%= props.namespace %><% if (props.package) { %><%= props.package %><% } %>;

import org.junit.Test;

/**
 * <%= _.humanize(props.name) %> class unit test.
 *
 * @version 1.0.0
 */
<%= options.visibility %> class <%= _.classify(props.name) %>Test {
}
