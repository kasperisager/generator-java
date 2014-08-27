/**
 * Copyright (C) <%= new Date().getFullYear() %> <%= props.author %>.
 */
package <%= props.namespace %><% if (props.package) { %><%= props.package %><% } %>;

/**
 * <%= _.humanize(props.name) %> interface.
 *
 * @author  <%= props.author %><% if (props.email) { %> <<%= props.email %>><% } %>
 * @version 1.0.0
 */
public interface <%= _.classify(props.name) %> {
}
